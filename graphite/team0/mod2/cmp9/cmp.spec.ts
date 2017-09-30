
import { Cmp6029Component } from './cmp';
describe('Cmp6029Component', () => {
  it('should add', () => {
    expect(new Cmp6029Component().add6029(1)).toBe(6030);
  });
});