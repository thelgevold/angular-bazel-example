
import { Cmp9561Component } from './cmp';
describe('Cmp9561Component', () => {
  it('should add', () => {
    expect(new Cmp9561Component().add9561(1)).toBe(9562);
  });
});