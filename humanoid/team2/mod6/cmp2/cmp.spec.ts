
import { Cmp7262Component } from './cmp';
describe('Cmp7262Component', () => {
  it('should add', () => {
    expect(new Cmp7262Component().add7262(1)).toBe(7263);
  });
});