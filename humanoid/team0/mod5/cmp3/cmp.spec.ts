
import { Cmp7053Component } from './cmp';
describe('Cmp7053Component', () => {
  it('should add', () => {
    expect(new Cmp7053Component().add7053(1)).toBe(7054);
  });
});