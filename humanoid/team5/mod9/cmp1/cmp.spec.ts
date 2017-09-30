
import { Cmp7591Component } from './cmp';
describe('Cmp7591Component', () => {
  it('should add', () => {
    expect(new Cmp7591Component().add7591(1)).toBe(7592);
  });
});