
import { Cmp3700Component } from './cmp';
describe('Cmp3700Component', () => {
  it('should add', () => {
    expect(new Cmp3700Component().add3700(1)).toBe(3701);
  });
});