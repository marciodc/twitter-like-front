import { TokenService } from '../../services/storage.service'

export default {
  accessToken: TokenService.getToken(),
  userName: TokenService.getUserName(),
  userId: TokenService.getUserId(),
  logged: TokenService.logged()
}
