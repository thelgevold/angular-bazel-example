
import { Cmp7010Component } from './cmp';
describe('Cmp7010Component', () => {
  it('should add', () => {
    expect(new Cmp7010Component().add7010(1)).toBe(7011);
  });
});