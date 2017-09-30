
import { Cmp7598Component } from './cmp';
describe('Cmp7598Component', () => {
  it('should add', () => {
    expect(new Cmp7598Component().add7598(1)).toBe(7599);
  });
});