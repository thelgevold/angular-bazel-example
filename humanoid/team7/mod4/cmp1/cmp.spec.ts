
import { Cmp7741Component } from './cmp';
describe('Cmp7741Component', () => {
  it('should add', () => {
    expect(new Cmp7741Component().add7741(1)).toBe(7742);
  });
});