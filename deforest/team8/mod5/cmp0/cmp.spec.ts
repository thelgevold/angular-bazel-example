
import { Cmp3850Component } from './cmp';
describe('Cmp3850Component', () => {
  it('should add', () => {
    expect(new Cmp3850Component().add3850(1)).toBe(3851);
  });
});