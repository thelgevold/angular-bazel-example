
import { Cmp7974Component } from './cmp';
describe('Cmp7974Component', () => {
  it('should add', () => {
    expect(new Cmp7974Component().add7974(1)).toBe(7975);
  });
});