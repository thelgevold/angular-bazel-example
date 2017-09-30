
import { Cmp5923Component } from './cmp';
describe('Cmp5923Component', () => {
  it('should add', () => {
    expect(new Cmp5923Component().add5923(1)).toBe(5924);
  });
});