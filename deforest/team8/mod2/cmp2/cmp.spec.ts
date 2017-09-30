
import { Cmp3822Component } from './cmp';
describe('Cmp3822Component', () => {
  it('should add', () => {
    expect(new Cmp3822Component().add3822(1)).toBe(3823);
  });
});