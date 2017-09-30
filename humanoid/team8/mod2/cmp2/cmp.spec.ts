
import { Cmp7822Component } from './cmp';
describe('Cmp7822Component', () => {
  it('should add', () => {
    expect(new Cmp7822Component().add7822(1)).toBe(7823);
  });
});