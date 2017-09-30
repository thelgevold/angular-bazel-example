
import { Cmp7023Component } from './cmp';
describe('Cmp7023Component', () => {
  it('should add', () => {
    expect(new Cmp7023Component().add7023(1)).toBe(7024);
  });
});