
import { Cmp9219Component } from './cmp';
describe('Cmp9219Component', () => {
  it('should add', () => {
    expect(new Cmp9219Component().add9219(1)).toBe(9220);
  });
});