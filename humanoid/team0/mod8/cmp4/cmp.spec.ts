
import { Cmp7084Component } from './cmp';
describe('Cmp7084Component', () => {
  it('should add', () => {
    expect(new Cmp7084Component().add7084(1)).toBe(7085);
  });
});