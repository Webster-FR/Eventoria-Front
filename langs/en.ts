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
    },
    buttons: {
      back: "Back",
      previous: "Previous",
      next: "Next",
    }
  },
  navigation: {
    cta: "Join us",
    links: {
      explore: {
        trigger: "Explore"
      },
      pricing: "Pricing",
      about: "About"
    },
    userDropdown: {
      profile: "My profile",
      preferences: "Preferences",
      logout: "Logout",
    }
  },
  pages: {
    auth: {
      register: {
        title: "Register",
        description: "We'd like to welcome you to Eventoria, and we're delighted that you'd like to contribute to the life of our platform. You're just a few clicks away from perfection!",
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
      },
      login: {
        title: "Login",
        description: "Hello again, we hope all is well since your last visit? Glad to see you're enjoying our platform, log on and check out the latest additions!",
        btn: "Go to my account",
        inputs: {
          username: {
            label: "Username",
            placeholder: "Ex: john.doe"
          },
          password: {
            label: "Password",
            placeholder: "Ex: ·············"
          },
          keepMeLoggedIn: "Keep me logged in."
        },
        toasts: {
          userLoggedIn: {
            title: "Welcome back 🎉",
            description: "It's been a long time since we've seen you! Check out the latest additions to the platform 😊",
          }
        },
        notRegistered: "I need an account!"
      },
      otp: {
        title: "Verify your email",
        description: "Last step before you can fully enjoy our platform and all its features. You have received an e-mail containing your account verification code.",
        noCodeReceived: "I haven't received a code.",
        toasts: {
          emailVerified: {
            title: "Congratulations 🎉",
            description: "Your e-mail address has been validated 💪 You can now use the platform as you wish!",
          },
          wrongOTP: {
            title: "Oh no 💢",
            description: "It seems that the code you gave is not the right one. Check your e-mails and try again!",
          },
        }
      },
      resetPassword: {
        title: "Reset my password",
        description: "Your password is the key to securing your account. Don't take this step lightly!",
        btn: "Reset",
        inputs: {
          password: {
            label: "New password",
            placeholder: "Ex: ··········",
          },
          confirm: {
            label: "Confirmation",
            placeholder: "Ex: ··········",
          },
          disconnectFromEverywhere: "Disconnect me from every devices."
        },
        toasts: {
          passwordUpdated: {
            title: "Congratulations 🎉",
            description: "You password has been updated! You can now login with your new password 👍",
          },
          inconsistent: {
            title: "Oh no 💢",
            description: "The passwords are not identical! Please correct the error before trying again.",
          }
        },
      }
    }
  },
}
