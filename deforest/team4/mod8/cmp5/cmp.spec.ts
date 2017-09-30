
import { Cmp3485Component } from './cmp';
describe('Cmp3485Component', () => {
  it('should add', () => {
    expect(new Cmp3485Component().add3485(1)).toBe(3486);
  });
});