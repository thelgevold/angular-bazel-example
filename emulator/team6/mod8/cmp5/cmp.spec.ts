
import { Cmp4685Component } from './cmp';
describe('Cmp4685Component', () => {
  it('should add', () => {
    expect(new Cmp4685Component().add4685(1)).toBe(4686);
  });
});