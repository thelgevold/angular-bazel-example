
import { Cmp7775Component } from './cmp';
describe('Cmp7775Component', () => {
  it('should add', () => {
    expect(new Cmp7775Component().add7775(1)).toBe(7776);
  });
});