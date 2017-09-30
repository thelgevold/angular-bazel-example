
import { Cmp7180Component } from './cmp';
describe('Cmp7180Component', () => {
  it('should add', () => {
    expect(new Cmp7180Component().add7180(1)).toBe(7181);
  });
});