<script setup lang="ts">
import {Button} from "~/components/ui/button";
import {LogOut, Settings, User} from "@iconoir/vue";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from "~/components/ui/dropdown-menu";
</script>

<template>
  <div></div>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Button variant="ghost" class="h-auto w-auto p-0 rounded-full">
        <Avatar>
          <AvatarImage src="" />
          <AvatarFallback>lm</AvatarFallback>
        </Avatar>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>About me</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <User class="mr-2" />
          <span>{{ $t("navigation.userDropdown.profile") }}</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <Settings class="mr-2" />
          <span>{{ $t("navigation.userDropdown.preferences") }}</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogOut class="mr-2" />
          <span>{{ $t("navigation.userDropdown.logout") }}</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<style scoped>

</style>
