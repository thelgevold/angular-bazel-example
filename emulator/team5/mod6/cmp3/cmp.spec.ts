
import { Cmp4563Component } from './cmp';
describe('Cmp4563Component', () => {
  it('should add', () => {
    expect(new Cmp4563Component().add4563(1)).toBe(4564);
  });
});