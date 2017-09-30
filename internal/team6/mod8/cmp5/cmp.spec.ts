
import { Cmp8685Component } from './cmp';
describe('Cmp8685Component', () => {
  it('should add', () => {
    expect(new Cmp8685Component().add8685(1)).toBe(8686);
  });
});