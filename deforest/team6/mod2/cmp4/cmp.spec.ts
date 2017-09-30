
import { Cmp3624Component } from './cmp';
describe('Cmp3624Component', () => {
  it('should add', () => {
    expect(new Cmp3624Component().add3624(1)).toBe(3625);
  });
});