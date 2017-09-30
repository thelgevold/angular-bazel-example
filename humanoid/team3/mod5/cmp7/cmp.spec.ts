
import { Cmp7357Component } from './cmp';
describe('Cmp7357Component', () => {
  it('should add', () => {
    expect(new Cmp7357Component().add7357(1)).toBe(7358);
  });
});