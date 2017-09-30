
import { Cmp6839Component } from './cmp';
describe('Cmp6839Component', () => {
  it('should add', () => {
    expect(new Cmp6839Component().add6839(1)).toBe(6840);
  });
});