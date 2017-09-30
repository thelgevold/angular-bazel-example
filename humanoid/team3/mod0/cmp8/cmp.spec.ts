
import { Cmp7308Component } from './cmp';
describe('Cmp7308Component', () => {
  it('should add', () => {
    expect(new Cmp7308Component().add7308(1)).toBe(7309);
  });
});