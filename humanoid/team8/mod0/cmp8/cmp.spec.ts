
import { Cmp7808Component } from './cmp';
describe('Cmp7808Component', () => {
  it('should add', () => {
    expect(new Cmp7808Component().add7808(1)).toBe(7809);
  });
});