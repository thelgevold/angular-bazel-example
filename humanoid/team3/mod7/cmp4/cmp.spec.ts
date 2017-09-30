
import { Cmp7374Component } from './cmp';
describe('Cmp7374Component', () => {
  it('should add', () => {
    expect(new Cmp7374Component().add7374(1)).toBe(7375);
  });
});