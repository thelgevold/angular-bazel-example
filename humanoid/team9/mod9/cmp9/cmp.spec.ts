
import { Cmp7999Component } from './cmp';
describe('Cmp7999Component', () => {
  it('should add', () => {
    expect(new Cmp7999Component().add7999(1)).toBe(8000);
  });
});