export default {
  generics: {
    themes: {
      dark: "Sombre",
      light: "Clair",
      system: "Système",
    },
    toasts: {
      internalServerError: {
        title: "Oups... 💢",
        description: "Une erreur interne est survenue, réessayez plus tard. Si le problème persiste, contactez un administrateur.",
      },
    },
    buttons: {
      back: "Retour",
      previous: "Précédent",
      next: "Suivant",
    }
  },
  pages: {
    auth: {
      register: {
        title: "Inscription",
        description: "Nous vous souhaitons la bienvenue sur Eventoria et sommes heureux de voir que vous souhaitez contribuer à faire vivre notre plateforme. Vous n'êtes plus qu'à quelques clics de la perfection !",
        btn: "Créer mon compte",
        inputs: {
          username: {
            label: "Nom d'utilisateur",
            placeholder: "Ex : john.doe"
          },
          displayName: {
            label: "Nom d'affichage",
            placeholder: "Ex : John DOE"
          },
          email: {
            label: "Adresse e-mail",
            placeholder: "{'Ex : john.doe@exemple.com'}"
          },
          password: {
            label: "Mot de passe",
            placeholder: "Ex : ·············"
          },
          termsAndConditions: "J'accepte les conditions d'utilisation."
        },
        toasts: {
          userCreated: {
            title: "Félicitations 🎉",
            description: "Votre compte a été créé avec succès ! Avant de pouvoir jouir pleinement de l'application, veuillez vérifier votre e-mail.",
          }
        },
        alreadyRegistered: "J'ai déjà un compte !"
      },
      login: {
        title: "Connexion",
        description: "Re-bonjour, nous espérons que tout va bien depuis votre dernier passage ? Heureux de voir que notre plateforme vous plaît, connectez-vous et découvrez les derniers ajouts !",
        btn: "Accéder à mon compte",
        inputs: {
          username: {
            label: "Nom d'utilisateur",
            placeholder: "Ex : john.doe"
          },
          password: {
            label: "Mot de passe",
            placeholder: "Ex : ·············"
          },
          keepMeLoggedIn: "Se souvenir de moi."
        },
        toasts: {
          userCreated: {
            title: "Bon retour 🎉",
            description: "Ça faisait longtemps que nous ne vous avions pas vu ! Découvrez les derniers ajouts sur la plateforme 😊",
          }
        },
        notRegistered: "Je n'ai pas de compte !"
      },
      otp: {
        title: "Vérifiez votre e-mail",
        description: "Dernière étape avant de pouvoir jouir pleinement de notre plateforme et de toutes ses fonctionnalités. Vous avez reçu un e-mail comprenant le code de vérification de votre compte.",
        noCodeReceived: "Je n'ai pas reçu de code.",
        toasts: {
          emailVerified: {
            title: "Félicitations 🎉",
            description: "Ton adresse e-mail a été validée 💪 Tu peux désormais utiliser la plateforme comme bon te semble !",
          },
          wrongOTP: {
            title: "Oh non 💢",
            description: "Il semblerait que le code que tu as donné n'est pas le bon. Vérifie tes e-mails et réessaye !",
          },
        }
      }
    }
  },
}
