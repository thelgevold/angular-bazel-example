
import { Cmp3912Component } from './cmp';
describe('Cmp3912Component', () => {
  it('should add', () => {
    expect(new Cmp3912Component().add3912(1)).toBe(3913);
  });
});