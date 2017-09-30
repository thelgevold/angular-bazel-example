
import { Cmp7713Component } from './cmp';
describe('Cmp7713Component', () => {
  it('should add', () => {
    expect(new Cmp7713Component().add7713(1)).toBe(7714);
  });
});