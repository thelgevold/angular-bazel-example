
import { Cmp7555Component } from './cmp';
describe('Cmp7555Component', () => {
  it('should add', () => {
    expect(new Cmp7555Component().add7555(1)).toBe(7556);
  });
});