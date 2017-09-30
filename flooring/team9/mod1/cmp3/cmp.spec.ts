
import { Cmp5913Component } from './cmp';
describe('Cmp5913Component', () => {
  it('should add', () => {
    expect(new Cmp5913Component().add5913(1)).toBe(5914);
  });
});