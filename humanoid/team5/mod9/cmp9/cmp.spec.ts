
import { Cmp7599Component } from './cmp';
describe('Cmp7599Component', () => {
  it('should add', () => {
    expect(new Cmp7599Component().add7599(1)).toBe(7600);
  });
});