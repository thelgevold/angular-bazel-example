
import { Cmp3565Component } from './cmp';
describe('Cmp3565Component', () => {
  it('should add', () => {
    expect(new Cmp3565Component().add3565(1)).toBe(3566);
  });
});