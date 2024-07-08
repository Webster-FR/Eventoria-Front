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
      cancel: "Annuler",
      loading: "Chargement...",
      updateConfirm: "Mettre à jour",
      seeMore: "Voir plus",
      seeLess: "Voir moins",
    }
  },
  navigation: {
    cta: "Nous rejoindre",
    title: "Menu",
    links: {
      explore: "Explorer",
      pricing: "Nos tarifs",
      about: "À propos"
    },
    userDropdown: {
      profile: "Mon profil",
      preferences: "Préférences",
      logout: "Déconnexion",
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
            placeholder: "{'Ex : john.doe@exemple.fr'}"
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
          userLoggedIn: {
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
      },
      resetPassword: {
        title: "Réinitialiser mon mot de passe",
        description: "Le mot de passe est un point clé pour sécuriser votre compte. Ne prenez pas cette étape à la légère !",
        btn: "Réinitialiser",
        inputs: {
          password: {
            label: "Nouveau mot de passe",
            placeholder: "Ex : ··········",
          },
          confirm: {
            label: "Confirmation",
            placeholder: "Ex : ··········",
          },
          disconnectFromEverywhere: "Me déconnecter de tous mes appareils."
        },
        toasts: {
          passwordUpdated: {
            title: "Félicitations 🎉",
            description: "Votre mot de passe a été mis à jour ! Vous pouvez désormais vous connecter avec votre nouveau mot de passe 👍",
          },
          inconsistent: {
            title: "Oh non 💢",
            description: "Les mots de passes ne sont pas identiques ! Veuillez corriger l'erreur avant de réessayer.",
          }
        },
      }
    },
    preferences: {
      title: "Préférences",
      sections: {
        profile: {
          title: "Mon profil",
          params: {
            userName: {
              title: "Nom d'utilisateur",
              description: "Votre nom d'utilisateur est utilisé pour vous connecter, partager facilement votre profil et par défaut si le nom d'affichage n'est pas défini.",
              dialog: {
                title: "Changer mon nom d'utilisateur",
                description: "Cette action changera ton nom d'utilisateur sur toute la plateforme et tous les liens de partages envoyés depuis seront désormais invalides.",
                input: {
                  label: "Nouveau nom d'utilisateur",
                  placeholder: "Ex : john.doe",
                },
                action: "Mettre à jour",
              },
              toasts: {
                usernameUpdated: {
                  title: "Félicitation 🎉",
                  description: "Ton nom d'utilisateur a été changé ! Tout le monde t'identifiera désormais par \"%username\".",
                }
              }
            },
            displayName: {
              title: "Nom d'affichage",
              description: "Votre nom d'affichage est utilisé sur toute la plateforme pour vous représenter publiquement.",
              dialog: {
                title: "Changer mon nom d'affichage",
                description: "Ceci défini votre identité sur la plateforme, prends le temps de te trouver un joli petit nom avant de le modifier.",
                input: {
                  label: "Nom d'affichage",
                  placeholder: "Ex : John",
                },
              },
              toasts: {
                displayNameUpdated: {
                  title: "Félicitation 🎉",
                  description: "Ton nom d'affichage a été changé ! Tout le monde te verra désormais apparaître sous \"%displayName\".",
                }
              },
            }
          },
        },
        appearance: {
          title: "Apparence",
          params: {
            language: {
              title: "Choix de la langue d'affichage",
              description: "Sélectionnez la langue dans laquelle vous souhaitez afficher l'interface de l'application. Cela permet d'adapter les textes, menus et autres éléments textuels à la langue de votre choix pour une meilleure expérience utilisateur.",
            },
            theme: {
              title: "Choix du thème",
              description: "Sélectionnez le thème visuel de l'application selon vos préférences. Vous pouvez opter pour un thème clair pour une apparence lumineuse et épurée, ou un thème sombre pour une interface élégante et reposante pour les yeux. Cette personnalisation permet d'adapter l'apparence de l'application à votre confort visuel.",
            }
          }
        },
        security: {
          title: "Sécurité",
          params: {
            emailAddress: {
              title: "Adresse e-mail",
              description: "%(emailAddress)",
              action: "Changer mon e-mail",
              toasts: {
                emailChanged: {
                  title: "Félicitation 🎉",
                  description: "Votre adresse e-mail a été changée avec succès. Un e-mail de vérification vous a été envoyé !"
                }
              },
              dialog: {
                title: "Changer mon e-mail",
                description: "Cette action est définitive. Elle demandera une nouvelle vérification de votre compte.",
                input: {
                  label: "Nouvelle adresse e-mail",
                  placeholder: "{'Ex : john.doe@exemple.fr'}"
                },
              }
            },
            password: {
              title: "Mot de passe",
              description: "Le mot de passe protège votre compte. Avoir un mot de passe fort réduit les risques de piratage.",
              action: "Changer mon mot de passe",
              dialog: {
                title: "Changer mon mot de passe",
                description: "Le mot de passe protège votre compte. Avoir un mot de passe fort réduit les risques de piratage.",
                inputs: {
                  newPassword: {
                    label: "Nouveau mot de passe",
                    placeholder: "Ex : ··········",
                  },
                  confirm: {
                    label: "Confirmation",
                    placeholder: "Ex : ··········",
                  },
                  disconnect: "Déconnecter tous mes appareils.",
                },
              },
              toasts: {
                passwordChanged: {
                  title: "Félicitation 🎉",
                  description: "Votre mot de passe a bien été changé ! Vous pourrez désormais vous connecter avec votre nouveau mot de passe.",
                },
                inconsistent: {
                  title: "Oh non 💢",
                  description: "Les mots de passes ne sont pas identiques ! Veuillez corriger l'erreur avant de réessayer.",
                }
              },
            }
          },
        },
        deleteAccount: {
          title: "Supprimer mon compte",
          dialog: {
            title: "Êtes-vous sûr ?",
            description: "Cette action ne peut être annulée. Elle supprimera définitivement votre compte et supprimera vos données de nos serveurs.",
            action: "Supprimer mon compte",
          },
          toasts: {
            accountDeleted: {
              title: "Nous sommes navré de vous voir partir 😔",
              description: "Votre compte a bien été supprimé de nos serveurs ! Nous vous souhaitons une bonne continuation.",
            }
          }
        }
      }
    },
    profile: {
      title: "Mon profil",
      "title-alt": "Profil de %user",
      card: {
        labels: {
          bio: "Biographie",
          networks: "Réseaux"
        }
      }
    },
    page: {
      card: {
        cta: "Voir la page"
      }
    }
  },
}
