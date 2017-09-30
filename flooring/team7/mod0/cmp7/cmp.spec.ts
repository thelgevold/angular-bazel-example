
import { Cmp5707Component } from './cmp';
describe('Cmp5707Component', () => {
  it('should add', () => {
    expect(new Cmp5707Component().add5707(1)).toBe(5708);
  });
});