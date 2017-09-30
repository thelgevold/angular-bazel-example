
import { Cmp7006Component } from './cmp';
describe('Cmp7006Component', () => {
  it('should add', () => {
    expect(new Cmp7006Component().add7006(1)).toBe(7007);
  });
});