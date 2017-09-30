
import { Cmp3750Component } from './cmp';
describe('Cmp3750Component', () => {
  it('should add', () => {
    expect(new Cmp3750Component().add3750(1)).toBe(3751);
  });
});