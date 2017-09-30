
import { Cmp7073Component } from './cmp';
describe('Cmp7073Component', () => {
  it('should add', () => {
    expect(new Cmp7073Component().add7073(1)).toBe(7074);
  });
});