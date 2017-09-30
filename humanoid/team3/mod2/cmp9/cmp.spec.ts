
import { Cmp7329Component } from './cmp';
describe('Cmp7329Component', () => {
  it('should add', () => {
    expect(new Cmp7329Component().add7329(1)).toBe(7330);
  });
});