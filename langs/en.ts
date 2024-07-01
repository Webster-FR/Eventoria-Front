export default {
  generics: {
    themes: {
      dark: "Dark",
      light: "Light",
      system: "System",
    },
    toasts: {
      internalServerError: {
        title: "Oops... 💢",
        description: "An internal error has occurred, try again later. If the problem persists, contact an administrator.",
      },
    }
  },
  pages: {
    auth: {
      register: {
        title: "Register",
        btn: "Create my account",
        inputs: {
          username: {
            label: "Username",
            placeholder: "Ex: john.doe"
          },
          displayName: {
            label: "Display name",
            placeholder: "Ex: John DOE"
          },
          email: {
            label: "Email address",
            placeholder: "{'Ex: john.doe@example.com'}"
          },
          password: {
            label: "Password",
            placeholder: "Ex: ·············"
          },
          termsAndConditions: "I agree Terms and Conditions."
        },
        toasts: {
          userCreated: {
            title: "Congratulations 🎉",
            description: "Your account has been successfully created! Please check your e-mail address before using the application.",
          }
        },
        alreadyRegistered: "I already have an account!"
      }
    }
  },
}
