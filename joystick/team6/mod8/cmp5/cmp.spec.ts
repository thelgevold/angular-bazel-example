
import { Cmp9685Component } from './cmp';
describe('Cmp9685Component', () => {
  it('should add', () => {
    expect(new Cmp9685Component().add9685(1)).toBe(9686);
  });
});