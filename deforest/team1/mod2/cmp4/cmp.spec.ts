
import { Cmp3124Component } from './cmp';
describe('Cmp3124Component', () => {
  it('should add', () => {
    expect(new Cmp3124Component().add3124(1)).toBe(3125);
  });
});