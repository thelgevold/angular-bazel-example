
import { Cmp7683Component } from './cmp';
describe('Cmp7683Component', () => {
  it('should add', () => {
    expect(new Cmp7683Component().add7683(1)).toBe(7684);
  });
});