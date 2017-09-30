
import { Cmp5576Component } from './cmp';
describe('Cmp5576Component', () => {
  it('should add', () => {
    expect(new Cmp5576Component().add5576(1)).toBe(5577);
  });
});