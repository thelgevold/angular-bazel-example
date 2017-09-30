
import { Cmp5685Component } from './cmp';
describe('Cmp5685Component', () => {
  it('should add', () => {
    expect(new Cmp5685Component().add5685(1)).toBe(5686);
  });
});