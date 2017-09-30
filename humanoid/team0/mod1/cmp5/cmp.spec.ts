
import { Cmp7015Component } from './cmp';
describe('Cmp7015Component', () => {
  it('should add', () => {
    expect(new Cmp7015Component().add7015(1)).toBe(7016);
  });
});