
import { Cmp7923Component } from './cmp';
describe('Cmp7923Component', () => {
  it('should add', () => {
    expect(new Cmp7923Component().add7923(1)).toBe(7924);
  });
});