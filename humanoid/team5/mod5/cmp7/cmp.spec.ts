
import { Cmp7557Component } from './cmp';
describe('Cmp7557Component', () => {
  it('should add', () => {
    expect(new Cmp7557Component().add7557(1)).toBe(7558);
  });
});